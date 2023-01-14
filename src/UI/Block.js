// Wrapper component https://dev.to/taiwobello/how-to-create-a-wrapper-component-in-react-29p

const Block = ({children, additionalClasses}) => {
    return(
        <div className={'bg-white p-6 rounded-2xl ' + additionalClasses}>
            {children}
        </div>
    )
}

export default Block;