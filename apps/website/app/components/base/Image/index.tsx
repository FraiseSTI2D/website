import React from 'react'

export type TImageProps = {
	src: string
	alt: string
	width?: string | number
	height?: string | number
	classNameImg?: string
	classNameAnchor?: string
}

export function Image({
	src,
	alt,
	width,
	height,
	classNameImg,
	classNameAnchor
}: TImageProps) {
	return (
		<a className={classNameAnchor} href={src} target="_blank">
			<img
				className={classNameImg}
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</a>
	)
}
