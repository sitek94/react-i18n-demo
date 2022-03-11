import { titleCase } from 'title-case'

export const stringFormatters = {
  lowerCase(value: string) {
    return value.toLowerCase()
  },

  upperCase(value: string) {
    return value.toUpperCase()
  },

  capitalize(value: string) {
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  },

  capitalizeFirst(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  },

  /**
   * Supports only English
   * https://github.com/blakeembrey/change-case/blob/master/packages/title-case/src/index.ts
   */
  titleCase(value: string) {
    return titleCase(value.toLowerCase())
  },
}
