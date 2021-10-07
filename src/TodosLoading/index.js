import React from "react"
import ContentLoader from "react-content-loader"
import './TodosLoading.css'

const TodosLoading = (props) => (
    <ContentLoader 
    className='Loading'
    speed={2}
    width={700}
    height={150}
    viewBox="0 0 700 150"
    backgroundColor="#f1e4e4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="34" cy="42" r="30" /> 
    <rect x="74" y="10" rx="5" ry="5" width="528" height="64" /> 
    <circle cx="34" cy="114" r="30" /> 
    <rect x="74" y="82" rx="5" ry="5" width="528" height="64" />
  </ContentLoader>
)

export {TodosLoading};