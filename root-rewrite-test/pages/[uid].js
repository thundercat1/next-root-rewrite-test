export default function NextPage(props) {
    return (<h1>This is a NextJS page with uid {props.uid}</h1>)
}

export async function getStaticProps({ params }) {
    return { props: { uid: params.uid } }
}

export async function getStaticPaths() {
    return {paths: [], fallback: true}
}