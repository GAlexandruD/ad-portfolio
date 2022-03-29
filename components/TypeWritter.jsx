import TypeWriterEffect from 'react-typewriter-effect'

const TypeWritter = () => {
  return (
    <>
      <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#faf9ff',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={['React', 'Web', 'NEXT.js', 'JavaScript']}
        multiTextDelay={1000}
        multiTextLoop={true}
        typeSpeed={30}
      />
    </>
  )
}

export default TypeWritter
