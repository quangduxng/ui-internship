import React from 'react'
import logo from './logoNCC.png';
import cssLogo from './css-icon.png';
import htmlLogo from './html-icon.png';
import urlLogo from './url-icon.png';
function Content() {
  return (
    <div className='container-main'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
        <div className="text-title">
            <strong>Lorem ipsum dolor sit asmet?</strong>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
        <div className="second-text">
          <div className='text-1'>
            <strong>Lorem ipsum dolor sit amet</strong>
            <div className="main-content">
              <img src={cssLogo} alt=""  height={"auto"} width="128px" />
              <div className='content-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at  </div>
            </div>
               <div className='content-2'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </div>
          </div>
          <div className='text-1'>
            <strong>Lorem ipsum dolor sit amet</strong>
            <div className="main-content">
              <img src={htmlLogo} alt="" height={"auto"} width="128px" />
              <div className='content-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at  </div>
            </div>
               <div className='content-2'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </div>
          </div>
          <div className='text-1'>
            <strong>Lorem ipsum dolor sit amet</strong>
            <div className="main-content">
              <img src={urlLogo} alt=""  height={"auto"} width="128px"/>
              <div className='content-1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at  </div>
            </div>
               <div className='content-2'>ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </div>
          </div>
          <div className='text-2'></div>
          <div className='text-3'></div>
        </div>
    </div>
  )
}

export default Content