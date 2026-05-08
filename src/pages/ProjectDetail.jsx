import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { client } from '../prismic/client'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/pages/project-detail.scss'

const ProjectDetail = () => {
  const { uid } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!uid) return
    setLoading(true)
    client.getByUID('projects', uid).then(res => {
      setProject(res.data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [uid])

  if (loading) {
    return (
      <Layout>
        <Seo title="Loading..." />
        <div className="detail-loading">
          <div className="spinner" />
        </div>
      </Layout>
    )
  }

  if (!project) {
    return (
      <Layout>
        <Seo title="Project Not Found" />
        <div className="detail-error">
          <h1>Project not found</h1>
          <button onClick={() => navigate('/')}>Back Home</button>
        </div>
      </Layout>
    )
  }

  const { title_project, description_ptoject, link_project, link_code, image_project, category1 } = project

  return (
    <Layout>
      <Seo title={title_project?.[0]?.text || 'Project'} />
      <div className="detail-hero" style={{ backgroundImage: `url(${image_project?.url})` }}>
        <div className="detail-hero-overlay" />
        <div className="detail-hero-content">
          <button className="detail-back" onClick={() => navigate('/')}>
            ← Back
          </button>
          {category1 && <span className="detail-category">{category1}</span>}
          <h1>{title_project?.[0]?.text}</h1>
          <p>{description_ptoject?.[0]?.text}</p>
          <div className="detail-actions">
            {link_project?.url && (
              <a href={link_project.url} target="_blank" rel="noreferrer" className="btn-demo">
                Live Demo
              </a>
            )}
            {link_code?.url && (
              <a href={link_code.url} target="_blank" rel="noreferrer" className="btn-code">
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetail
