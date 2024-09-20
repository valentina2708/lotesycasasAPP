// import { styled } from '@mui/material/styles';

// import CloseIcon from '@mui/icons-material/Close';
// import { Colors } from '/src/config/themeConfig.js';

// const Modal = ({
// 	children,
// 	estado,
// 	cambiarEstado,
// 	mostrarOverlay,
// 	posicionModal,
// 	padding,
// }) => {
// 	return (
// 		<>
// 			{estado && (
// 				<Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
// 					<ContenedorModal padding={padding}>
// 						<BotonCerrar onClick={() => cambiarEstado(false)}>
// 							<CloseIcon />
// 						</BotonCerrar>

// 						{children}
// 					</ContenedorModal>
// 				</Overlay>
// 			)}
// 		</>
// 	);
// };

// export default Modal;

// const Overlay = styled.div`
// 	width: 100vw;
// 	height: 100vh;
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	background: ${props =>
// 	props.mostrarOverlay ? 'rgba(5,0,0,.1)' : 'rgba(0,0,0,0)'};
// 	padding: 40px;
// 	display: flex;
// 	align-items: ${props =>
// 	props.posicionModal ? props.posicionModal : 'center'};
// 	justify-content: center;
// 	zindex: 1;
// `;

// const ContenedorModal = styled.div`
// 	width: 100px;
// 	min-height: 500px;
// 	background: #fff;
// 	position: absolute;
// 	border-radius: 5px;
// 	padding: ${props => (props.padding ? props.padding : '20px')};
// `;

// const BotonCerrar = styled.button`
// 	position: absolute;
// 	top: 5px;
// 	right: 10px;
// 	width: 40px;
// 	height: 40px;
// 	cursor: pointer;
// 	border: none;
// 	background: none;
// 	transition: 0.3s ease all;
// 	border-radius: 3px;
// 	color: #e9601c;
// `;
