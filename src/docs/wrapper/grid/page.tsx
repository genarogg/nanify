import GridWrapper from "@components/wrapper/grid-wrapper"
import "./styles.css"

export default function Home() {
  return (
    <main className="main">
      <GridWrapper className="grid-container">
        <div className="content-card">
          <h1 className="title">Content on Grid Background</h1>
          <p className="description">
            This is an example component placed inside the GridWrapper. You can put any content here and it will appear
            on top of the grid background.
          </p>
        </div>
      </GridWrapper>
    </main>
  )
}