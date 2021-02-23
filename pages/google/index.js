import React, { Component } from 'react'
import style from './style.module.css'
import AddItem from '../../components/add-item'
export class GooglePage extends Component {
  state = {
    value: '',
    list: [
      {
        url: 'https://infinityicon.infinitynewtab.com/user-share-icon/b6a95410ed77627337567fea2cbb157c.png?imageMogr2/thumbnail/260x/format/webp/blur/1x0/quality/100|imageslim',
        title: '天气'
      },
      {
        url: 'https://infinityicon.infinitynewtab.com/user-share-icon/534995dd434a6e0e39a4521a5fe04f8e.png?imageMogr2/thumbnail/260x/format/webp/blur/1x0/quality/100|imageslim',
        title: '掘金'
      },
      {
        url: 'https://infinityicon.infinitynewtab.com/user-share-icon/2b89ebe968d8cafe77a5c587daa79c7f.png?imageMogr2/thumbnail/260x/format/webp/blur/1x0/quality/100|imageslim',
        title: '知乎'
      }
    ]
  }
  render() {
    return (
      <div className={style['wrap']}>
        <img className={style['logo']} src={"https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}></img>
        <div className={style['input-wrap']}>
          <span style={{color: '#9aa0a6'}} className={'icon-wrap'}>
            <svg className={style['icon']} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
          </span>
          <input className={style['input']} onChange={(e) => this.setState({value: e.target.value})}></input>
        </div>
        <div className={style['list-wrap']}>
          {
            this.state.list.map(item => {
              return <AddItem item={item}></AddItem>
            })
          }
        </div>
      </div>
    )
  }
}

export default GooglePage
