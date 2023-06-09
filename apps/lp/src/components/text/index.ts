import tw from 'tailwind-styled-components'

const colorClasses = {
  none: '',
  white: 'text-white',
  base: 'text-gray-900 dark:text-white',
  'gray-light': 'text-gray-600 dark:text-gray-400',
  green: 'text-green-500',
}

const variantClasses = {
  h3: 'text-5xl font-title font-bold uppercase',
  h4: 'text-4xl font-title font-bold uppercase',
  h5: 'text-3xl font-title font-bold uppercase',
  h6: 'text-2xl font-title font-bold uppercase',
  bodyBig: 'text-xl font-title',
  body: 'text-lg font-title',
  subtitle: 'text-sm font-title',
  button: 'text-lg font-title font-bold uppercase',
  caption: 'text-xs font-title',
  overline: 'text-xs font-title',
}

export type TextProps = {
  variant?: keyof typeof variantClasses
  color?: keyof typeof colorClasses
}

export const Text = tw.p<TextProps>`transition
${({ variant = 'body' }) => variantClasses[variant]}
${({ color = 'base' }) => colorClasses[color]}
`
