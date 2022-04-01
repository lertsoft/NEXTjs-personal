// //__view.jsx
// // Unfinished scroll top function...
// const ScrollTopView = (props) => {
// 	const { onScroll, onVisbile, visible } = props
// 	console.log(visible)
// 	if (typeof window === 'object') window.addEventListener('scroll', onVisbile)

// 	return (
// 		<>
// 			<div
// 			style={{
// 				position: 'fixed',
// 				bottom: 30,
// 				right: 30
// 			}}>
// 				<button
// 					className='btn btn-primary btn-small'
//     				onClick={onScroll}
//         			style={{ display: visible ? 'inline-block' : 'none', borderRadius: 5 }}>
// 				ScrollTop
// 				</button>
// 			</div>
// 			<h1 style={{ position: 'fixed', bottom: 25, left: '40%', display: visible ? 'inline-block' : 'none' }}>End Scroll</h1>
// 	</>
// 	)
// }

// export default ScrollTopView;

// // index.jsx
// import ScrollTopView from './__view'
// import { createElement, useState } from 'react'

// const ScrollTop = () => {
// 	const [visible, setVisible] = useState(false)

// 	const onVisbile = () => {
// 		const scrolled = document.documentElement.scrollTop
// 		if (scrolled >= 600) setVisible(true)
// 		else if (scrolled <= 300) setVisible(false)
// 	}

// 	const onScroll = () => {
// 		if (typeof window === 'object') window.scrollTo({ top: 0, behavior: 'smooth' })
// 	}

//     return createElement(ScrollTopView, {
// 		onScroll,
// 		onVisbile,
// 		visible
// 	})
// }

// export default ScrollTop;