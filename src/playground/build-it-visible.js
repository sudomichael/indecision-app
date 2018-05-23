const appRoot = document.getElementById('app');
const app = {
    visible: false, 
    hiddenText: "This text is supposed to be hidden!"
}

const onVisibilityToggle = () => {
    app.visible = !app.visible;
    renderTemplate();
}
const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <div>
                <button onClick={onVisibilityToggle}>
                    {app.visible ? 'Hide details' : 'Show details'}
                </button>
                {app.visible && <p>{app.hiddenText}</p>}
            </div>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderTemplate()