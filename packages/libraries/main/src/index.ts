import Matching from './Matching'
import Scoring from './scoring'
import TimeEstimates from './TimeEstimates'
import Feedback from './Feedback'

import { Options } from './Options'
import debounce from './debounce'
import { Matcher, MatchExtended, OptionsType, ZxcvbnResult } from './types'

const time = () => new Date().getTime()

class Zxcvbn {
  private options: Options

  private matching: Matching

  private feedback: Feedback

  private timeEstimates: TimeEstimates

  constructor(options: OptionsType = {}) {
    this.options = new Options(options)
    this.matching = new Matching(this.options)
    this.feedback = new Feedback(this.options)
    this.timeEstimates = new TimeEstimates(this.options)
  }

  public addMatcher(name: string, matcher: Matcher) {
    this.options.addMatcher(name, matcher)
  }

  public check(password: string, userInputs?: (string | number)[]) {
    const start = time()
    const matches = this.main(password, userInputs)

    if (matches instanceof Promise) {
      throw new Error(
        'You are using a Promised matcher, please use `zxcvbnAsync` for it.',
      )
    }
    return this.createReturnValue(matches, password, start)
  }

  public async checkAsync(password: string, userInputs?: (string | number)[]) {
    const usedPassword = password.substring(0, this.options.maxLength)
    const start = time()
    const matches = await this.main(usedPassword, userInputs)

    return this.createReturnValue(matches, usedPassword, start)
  }

  private main(password: string, userInputs?: (string | number)[]) {
    if (userInputs) {
      this.options.extendUserInputsDictionary(userInputs)
    }

    return this.matching.match(password)
  }

  private createReturnValue(
    resolvedMatches: MatchExtended[],
    password: string,
    start: number,
  ): ZxcvbnResult {
    const scoring = new Scoring(this.options, password)
    const matchSequence = scoring.mostGuessableMatchSequence(resolvedMatches)
    const calcTime = time() - start
    const attackTimes = this.timeEstimates.estimateAttackTimes(
      matchSequence.guesses,
    )

    return {
      calcTime,
      ...matchSequence,
      ...attackTimes,
      feedback: this.feedback.getFeedback(
        attackTimes.score,
        matchSequence.sequence,
      ),
    }
  }
}

export * from './types'
export { Options, debounce, Zxcvbn }
