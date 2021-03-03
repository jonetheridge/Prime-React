import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import {POSITION, SystemPositionProps} from './constants'
import sx from './sx'
import theme from './theme'
import {ComponentProps} from './utils/types'

type StyledPositionProps = {as?: React.ElementType} & SystemPositionProps

const Position = styled(Box)<StyledPositionProps>`
  ${POSITION};
  ${sx};
`

Position.defaultProps = {theme}

export type PositionProps = ComponentProps<typeof Position>
export default Position

// Absolute
export type AbsoluteProps = Omit<PositionProps, 'position'>
export function Absolute(props: AbsoluteProps) {
  return <Position {...props} position="absolute" />
}
Absolute.defaultProps = Position.defaultProps

// Fixed
export type FixedProps = Omit<PositionProps, 'position'>
export function Fixed(props: AbsoluteProps) {
  return <Position {...props} position="fixed" />
}
Fixed.defaultProps = Position.defaultProps

// Relative
export type RelativeProps = Omit<PositionProps, 'position'>
export function Relative(props: RelativeProps) {
  return <Position {...props} position="relative" />
}
Relative.defaultProps = Position.defaultProps

// Sticky
export type StickyProps = Omit<PositionProps, 'position'>
export function Sticky(props: StickyProps) {
  return <Position {...props} position="sticky" />
}
Sticky.defaultProps = {...Position.defaultProps, top: 0, zIndex: 1}
