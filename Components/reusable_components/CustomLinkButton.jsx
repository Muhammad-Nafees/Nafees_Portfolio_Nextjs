import Link from "next/link";

const CustomLinkButton=({href,alt,extraStyle,onClickAction,text,target}) =>{
  return(
    <Link
    href={href}
    target={target}
    alt={alt}
    rel="noopener noreferrer"
    className={extraStyle}
     onClick={onClickAction}
  >
    {text}
  </Link>
  )     
}

export default CustomLinkButton;