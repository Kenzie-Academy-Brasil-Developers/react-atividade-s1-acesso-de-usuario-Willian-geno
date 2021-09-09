
function RestrictedPage (props) {
    return (
        <div>{
            props.isLoggedIn ?(<div>
                <div>Bem Vindo, {props.name}</div>
            </div>
            ):(
                <div>
                    <div>Você não pdoe acessar essa Pagina</div>
                </div>
            )}
            </div>
    )
}

export default RestrictedPage;