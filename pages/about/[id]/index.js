import { useRouter } from 'next/router';

function AboutIdIndex() {
    const router = useRouter();
    function loadProjectHandler() {
        // load data..
        router.push({
            pathname: '/about/[id]/[clientid]',
            query: {id: "a", clientid: 'b'}
        });
    }

    return (
      <div>
        <h1>This is AboutIdIndex Pages</h1>
        <button onClick={loadProjectHandler}>Load Project</button>
      </div>
    );
  }
  
  export default AboutIdIndex;
