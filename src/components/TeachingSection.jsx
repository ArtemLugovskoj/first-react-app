import WayToTeach from './WayToTeach'
import {ways} from '../data'

export default function TeachingSection() {
    return (
        <section>
              <h3>Наш подход к обучению</h3>

              <ul>
                {/* <WayToTeach title={ways[0].title} description={ways[0].description} />
                <WayToTeach { ...ways[1]} />
                <WayToTeach { ...ways[2]} />
                <WayToTeach { ...ways[3]} /> */}
                {ways.map(way => <WayToTeach key={way.title} {...way} />)}
              </ul>
          </section>
    )
}