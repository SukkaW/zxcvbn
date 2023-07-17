// @ts-ignore
import { Matcher } from '@zxcvbn-ts/core'
import MatchPwned from './matching'
import scoring from './scoring'
import feedback from './feedback'
import haveIBeenPwned from './haveIBeenPwned'
import { FetchApi, MatcherPwnedFactoryConfig } from './types'

export const matcherPwnedFactory = (
  universalFetch: FetchApi,
  config: MatcherPwnedFactoryConfig = {},
): Matcher => {
  return {
    Matching: MatchPwned(universalFetch, config),
    feedback,
    scoring,
  }
}

export { haveIBeenPwned }
