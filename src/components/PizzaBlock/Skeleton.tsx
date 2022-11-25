import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={340}
    height={536}
    viewBox="0 0 300 536"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="503" rx="2" ry="2" width="92" height="18" /> 
    <rect x="167" y="490" rx="10" ry="10" width="133" height="44" /> 
    <rect x="0" y="286" rx="2" ry="2" width="260" height="18" /> 
    <rect x="0" y="321" rx="2" ry="2" width="300" height="12" /> 
    <circle cx="151" cy="120" r="120" /> 
    <rect x="0" y="340" rx="2" ry="2" width="220" height="12" /> 
    <rect x="0" y="359" rx="2" ry="2" width="150" height="12" /> 
    <rect x="0" y="394" rx="5" ry="5" width="300" height="76" />
  </ContentLoader>
)