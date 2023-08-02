"use-client";
import logo from '../../assets/img/logo.png';
import Image from "next/image";

export const Logo = (props:any)=>(
    <Image src={logo} alt={'Logo'} height={props.size} style={{aspectRatio: '1'}}/>
    // <div className="logo">Logo</div>
)