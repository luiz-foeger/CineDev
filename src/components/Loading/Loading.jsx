import estilos from './Loading.module.css';

function Loading() {
    return (
        <div className={estilos.loader}>
            <div className={estilos.loaderDot}></div>
            <div className={estilos.loaderDot}></div>
            <div className={estilos.loaderDot}></div>
        </div>
    );
}

export default Loading;