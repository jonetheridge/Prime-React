/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */
import React from 'react'
import UnderlineNavLink from '../UnderlineNavLink'
import {render} from '../utils/testing'

describe('UnderlineNavLink', () => {
  xit('is a system component', () => {
    expect(UnderlineNavLink.systemComponent).toEqual(true)
  })

  it('renders an <a> by default', () => {
    expect(render(<UnderlineNavLink />).type).toEqual('a')
  })

  it('renders the given "tag" prop', () => {
    const Type = props => <b {...props} />
    expect(render(<UnderlineNavLink tag={Type} />)).toMatchSnapshot()
  })

  it('respects the "selected" prop', () => {
    expect(render(<UnderlineNavLink selected />)).toMatchSnapshot()
  })

  it('adds activeClassName={SELECTED_CLASS} when it gets a "to" prop', () => {
    const Mock = jest.fn(() => <div />)
    render(<UnderlineNavLink tag={Mock} to="#" />)
    expect(Mock.mock.calls[0][0].to).toEqual('#')
    expect(Mock.mock.calls[0][0].activeClassName).toEqual('selected')
  })

  it('has the right displayName', () => {
    expect(UnderlineNavLink.displayName).toEqual('UnderlineNavLink')
  })
})
