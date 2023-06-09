import React from 'react'
import { SectionAndOffset, Text } from 'components'
import tw from 'tailwind-styled-components'
import { InView } from 'react-intersection-observer'

const Column = tw.div`w-1/2`
const ImageContainer = tw.div`rounded-3xl overflow-hidden h-[600px] shadow-xl transition ease-in-out duration-[2000ms] delay-1000`
const Image = tw.img`w-full h-full object-cover transition transform duration-[12000ms] ease-out`
const TopPartContainer = tw.div`transition duration-1000 delay-150`

const Container = tw.div`flex justify-between mt-20 gap-12
${({ $direction }) => ($direction === 'left' ? 'flex-row' : 'flex-row-reverse')}
`

const TopPart = ({ section }) => (
  <InView>
    {({ ref, inView }) => (
      <TopPartContainer ref={ref} className={`${inView ? '' : 'opacity-0'}`}>
        <Text variant="h4" className="text-center uppercase">
          {section.title}
        </Text>
        <Text
          variant="bodyBig"
          color="gray-light"
          className="text-center w-1/2 mx-auto mt-8"
        >
          {section.description}
        </Text>
      </TopPartContainer>
    )}
  </InView>
)

const FeatureItem = ({ feature, color }) => (
  <div className="flex space-x-4">
    <div>
      <feature.icon
        className={`w-8 h-8 ${
          color === 'green' ? 'text-green-500' : 'text-blue-500'
        }`}
      />
    </div>
    <div>
      <Text variant="button">{feature.title}</Text>
      <Text variant="body" color="gray-light" className="mt-2">
        {feature.description}
      </Text>
    </div>
  </div>
)

const Content = ({ section }) => (
  <InView>
    {({ ref, inView }) => (
      <Container ref={ref} $direction={section.direction}>
        <Column>
          <ImageContainer className={`${inView ? '' : 'opacity-0'}`}>
            <Image
              src={section.imageUrl}
              alt={section.imageAlt}
              className={`${inView ? '' : 'scale-125 rotate-2 translate-y-4'}`}
            />
          </ImageContainer>
        </Column>
        <Column>
          <Text
            variant="h5"
            className={`transition duration-1000 delay-500 ${
              inView ? '' : 'opacity-0'
            }`}
          >
            {section.featuresTitle}
          </Text>
          <div className="mt-12 space-y-8">
            {section.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition transform duration-1000 ${
                  inView ? '' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: 500 + index * 250 + 'ms' }}
              >
                <FeatureItem
                  feature={feature}
                  color={index % 2 ? 'blue' : 'green'}
                />
              </div>
            ))}
          </div>
        </Column>
      </Container>
    )}
  </InView>
)

export const MidSection = ({ section }) => (
  <SectionAndOffset>
    <TopPart section={section} />
    <Content section={section} />
  </SectionAndOffset>
)
