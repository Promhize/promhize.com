import React from 'react'

export const CountDownErrorView = () => (
  <div className="block absolute w-32 p-3 bg-red text-white">
    <h4 className="mb-4 text-base">An error occured with the timer.</h4>
    <p className="text-sm">Sorry about that. We are right on it.</p>
  </div>
)

const CountDownView = ({ days, hours, minutes, seconds }) => (
  <b className="block absolute text-white">
    <div className="mb-8 text-2xl">{days}</div>
    <div className="mb-8 text-2xl">{hours}</div>
    <div className="mb-8 text-2xl">{minutes}</div>
    <div className="mb-8 text-2xl">{seconds}</div>
  </b>
)

export default CountDownView
