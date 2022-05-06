import React, { SVGProps } from 'react'

interface SubIconProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}

function SubNavIcon({ Icon, title }: SubIconProps) {
  return (
    <div className=" flex">
      <span className="mr-2">
        <Icon className="mr-2 h-6 w-6" />
      </span>
      <p className="font-bold uppercase">{title}</p>
    </div>
  )
}

export default SubNavIcon
