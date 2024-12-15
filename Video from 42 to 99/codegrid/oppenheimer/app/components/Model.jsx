/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useEffect, useState } from 'react';
// import bufferA from "./shaders/bufferA.glsl"
// import bufferB from "./shaders/bufferB.glsl"
// import bufferC from "./shaders/bufferC.glsl"
// import bufferD from "./shaders/bufferD.glsl"
// import final from "./shaders/bufferD.glsl"

// Promise.all([
//     fetch("shader/bufferA.glsl").then((response) => response.text()),
//     fetch("shader/bufferB.glsl").then((response) => response.text()),
//     fetch("shader/bufferC.glsl").then((response) => response.text()),
//     fetch("shader/bufferD.glsl").then((response) => response.text()),
//     fetch("shader/imageShader.glsl").then((response) => response.text()),
// ]).then(([bufferA, bufferB, bufferC, bufferD, final]) => {
//     bufferAShader = bufferA;
//     bufferBShader = bufferB;
//     bufferCShader = bufferC;
//     bufferDShader = bufferD;
//     imageShader = final;
//     init();
//     animate();
// })

export default function Model() {
    const [bufferAShader, setBufferAShader] = useState('');
    const [bufferBShader, setBufferBShader] = useState('');
    const [bufferCShader, setBufferCShader] = useState('');
    const [bufferDShader, setBufferDShader] = useState('');
    const [imageShader, setImageShader] = useState('');

    useEffect(() => {
        const fetchShaders = async () => {
            try {
              const responses = await Promise.all([
                fetch('shader/bufferA.glsl'),
                fetch('shader/bufferB.glsl'),
                fetch('shader/bufferC.glsl'),
                fetch('shader/bufferD.glsl'),
                fetch('shader/imageShader.glsl')
              ]);

            if (responses.some(response => !response.ok)) {
              throw new Error('Failed to fetch shaders');
            }

            const [bufferA, bufferB, bufferC, bufferD, final] = await Promise.all(
                responses.map(response => response.text())
            );

            setBufferAShader(bufferA);
            setBufferBShader(bufferB);
            setBufferCShader(bufferC);
            setBufferDShader(bufferD);
            setImageShader(final);
            init();
            animate();
            } catch (error) {
                console.log('Error fetching shaders:', error);
            }
        };

        fetchShaders();
    }, [])

    const init = () => {}
    const animate = () => {}

    return
}

