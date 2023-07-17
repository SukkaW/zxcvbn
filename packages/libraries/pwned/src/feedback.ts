// @ts-ignore
import { Options } from '@zxcvbn-ts/core'
import { MatchEstimated } from '@zxcvbn-ts/core/src'

export default (
  options: Options,
  _match: MatchEstimated,
  _isSoleMatch?: boolean,
) => {
  return {
    warning: options.translations.warnings.pwned,
    suggestions: [options.translations.suggestions.pwned],
  }
}
