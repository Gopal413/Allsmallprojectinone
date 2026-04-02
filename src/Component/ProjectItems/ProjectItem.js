import './ProjectItem.css';

const ProjectItem = (props) =>{
    const {projectDetails} = props;
    const {imageUrl , title, description} = projectDetails

    return(
        <>
        <li>
            <div className='card-container'>
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </li>
        </>
    )
}

export default ProjectItem;