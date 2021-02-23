import React, { Component } from 'react'
import style from './style.module.css'

export class AddItem extends Component {
  render() {
    const { title, url } = this.props.item
    return (
      <div className={style['item-wrap']}>
        <img src={url} className={style['item-img']}></img>
        <div className={style['title']}>{title}</div>
      </div>
    )
  }
}

export default AddItem