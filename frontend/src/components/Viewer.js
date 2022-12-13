import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import config from "../config/config";
import Items from "./Items";

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
`;

// const results = ["1 pepsi", "2 indomie", "1 doritos", "1 tea"]

export default function Viewer() {
   const webcamRef = useRef(null);
   const [capturedImg, setCapturedImg] = useState(null);
   const [prediction, setPrediction] = useState([]);

   const [isPaused, setPause] = useState(false);
   const ws = useRef(null);

   useEffect(() => {
      const client_id = Date.now();
      const url = `${config.WS_SERVER}/${client_id}`;
      console.log(url);
      ws.current = new WebSocket(url);
      ws.current.onopen = () => console.log("ws opened");
      ws.current.onclose = () => console.log("ws closed");

      return () => {
         ws.current.close();
      };
   }, []);

   useEffect(() => {
      if (!ws.current) return;

      ws.current.onmessage = (event) => {
         if (isPaused) return;
         const message = JSON.parse(event.data);
         setCapturedImg(message.output);
         setPrediction(eval(message.prediction));
         console.log(message)
      };

      setInterval(() => {
         capture();
      }, 10000);
   }, [isPaused]);

   const sendMessage = (msg) => {
      if (!ws.current) return;

      ws.current.send(msg);
   }

   const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "environment", // Can be "environment" or "user"
   };

   const capture = useCallback(() => {
      const capturedImg = webcamRef.current.getScreenshot();
      sendMessage(capturedImg);
   }, [webcamRef]);

   return (
      <Wrapper>
         <Webcam
            // style={{display: "none"}}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="50%"
            videoConstraints={videoConstraints}
         />
         <p>
            <button onClick={capture}>Capture photo</button>
         </p>
         {capturedImg && (
            <img alt="Captured image" src={capturedImg} width="50%" />
         )}

         <Items results={prediction} />

      </Wrapper>
   );
}
