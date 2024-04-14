'use client'
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spline scene="https://draft.spline.design/9lMrBnhabDli1fkB/scene.splinecode" />
    </div>
  );
}
