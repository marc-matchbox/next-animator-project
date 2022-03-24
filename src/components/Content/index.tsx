import { Container, ContentCenter } from './styled'

export const Content = () => {
	return (
		<Container>
			<ContentCenter>
				<div>
					<img src="/assets/images/jake-animation.gif" alt="Jake" />
				</div>
				<div>
					<img
						src="https://localhost:5001/api/QrCode/generate/url_da_image"
						alt="QRCode Jake"
					/>
				</div>
			</ContentCenter>
		</Container>
	)
}
