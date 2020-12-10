import cx from 'classnames'
import React from 'react'
import Header from '../../components/Header/Header'
import { IPageWrapperProps } from './interface'

export default class PageWrapper extends React.Component<IPageWrapperProps, any> {
    render() {
        return (
            <div className={cx({
                "app-page-wrapper": true,
                "light-theme": this.props.theme === 'LIGHT'
            })}>
                <Header />
                {this.props.children}
            </div>
        )
    }
}