import React, { Component } from 'react'
import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  endOfHour,
  endOfMinute,
  startOfTomorrow,
} from 'date-fns'

const releaseDateValue = [2018, 0, 14, 23, 59, 59, 999]
const oneLetterStart = 9

const releaseDate = new Date(...releaseDateValue)
const now = new Date()
const tomorrow = startOfTomorrow()
const nextMinute = endOfMinute(now)
const nextHour = endOfHour(now)

const prepend = (prefix, value) => prefix + value
const greater = (lhs, rhs) => lhs > rhs

class Countdown extends Component {
  state = {
    error: false,
    days: differenceInDays(releaseDate, now),
    hours: differenceInHours(tomorrow, now),
    minutes: differenceInMinutes(nextHour, now),
    seconds: differenceInSeconds(nextMinute, now),
  }
  setDays = (days: number) => {
    this.setState(state => ({ ...state, days }))
  }
  setHours = (hours: number) => {
    this.setState(state => ({ ...state, hours }))
  }
  setMinutes = (minutes: number) => {
    this.setState(state => ({ ...state, minutes }))
  }
  setSeconds = (seconds: number) => {
    this.setState(state => ({ ...state, seconds }))
  }
  componentDidMount() {
    let n = 0
    this.timeInterval = setInterval(() => {
      const { seconds, minutes, hours, days } = this.state
      if (seconds === 1) {
        if (minutes === 1) {
          if (hours === 1) {
            if (days === 1) {
              clearInterval(this.timeInterval)
            }
            this.setDays(days - 1)
            this.setHours(59)
            return
          }
          this.setHours(hours - 1)
          this.setMinutes(59)
          return
        }
        this.setMinutes(minutes - 1)
        this.setSeconds(59)
        return
      }
      this.setSeconds(this.state.seconds - 1)
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }
  render() {
    const { render } = this.props
    const { days, hours, minutes, seconds, error } = this.state
    return render({
      days: greater(days, oneLetterStart) ? days : prepend('0', days),
      hours: greater(hours, oneLetterStart) ? hours : prepend('0', hours),
      minutes: greater(minutes, oneLetterStart)
        ? minutes
        : prepend('0', minutes),
      seconds: greater(seconds, oneLetterStart)
        ? seconds
        : prepend('0', seconds),
    })
  }
}

export default Countdown
