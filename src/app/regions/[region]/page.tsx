import Button from '@/app/components/button/Button';
import SimpleLayout from '@/app/components/layouts/Simple';
import SmartLink from '@/components/link/SmartLink';
import { getBackgroundColor } from '@/utils/site-theme';
import React from 'react'

const page = ({params}: {params: string}) => {
    console.log(params, 'params');
    // HACK START
  //   goal: use the generic pages stuff
  //   better way:
  //     1. Have sections & blocks take the plain data, not the node.
  //     2. Enable section & block support for custom pages.

  const sections = []

  if (subregion.overview) {
    sections.push(
      getSectionGridNode({
        blocks: [
          getBlockTitleNode({
            text: 'Overview',
          }),
          getBlockTextNode({
            text: subregion.overview,
          }),
        ],
      }),
    )
  }

  if (subregion.governmentResponse) {
    sections.push(
      getSectionGridNode({
        blocks: [
          getBlockTitleNode({
            text: 'Government Response',
          }),
          getBlockTextNode({
            text: subregion.governmentResponse,
          }),
        ],
      }),
    )
  }

  if (subregion.longText) {
    sections.push(
      getSectionGridNode({
        blocks: [
          getBlockTitleNode({
            text: 'Government Response',
          }),
          getBlockTextNode({
            text: subregion.longText,
          }),
        ],
      }),
    )
  }
  // HACK END

  const today = new Date()
  const quarterOption = getQuarterOption(today)
  const needsExplorerOtions = {
    filters: {
      search: '',
      quarter: quarterOption,
      subregion: subregion.name,
    },
    axis: {
      indexBy: AxisOption.Item,
      groupBy: AxisOption.Category,
    },
    sort: {
      by: SortByOption.Value,
      order: SortOrderOption.Desc,
    },
  }

  const needsExplorerUrl = new URL('/needs-assessments/explorer/', getBaseURL())
  needsExplorerUrl.searchParams.set(
    'InteractiveNeedsBarChartTitle',
    `Top Needs In ${subregion.name} (${quarterOption})`,
  )
  needsExplorerUrl.searchParams.set(
    'InteractiveNeedsBarChartOptions',
    JSON.stringify(needsExplorerOtions),
  )

  return (
    <SimpleLayout>
      <header
        style={{
          backgroundColor: getBackgroundColor(),
        }}
        className="prose max-w-none py-8 flex flex-col md:flex-row justify-center items-center gap-x-4"
      >
        <div className="bg-white rounded-full drop-shadow-md">
          <GatsbyImage
            image={subregion.map.image.gatsbyImageData}
            alt={subregion.map.alt}
            className="w-36 h-36 rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="mb-0 text-center md:text-left">{subregion.name}</h1>

          <hr className="lg:w-6/5 m-0 border-b-4 border-navy-700" />

          <nav className="text-xl flex justify-center md:justify-start gap-2 pt-2">
            <div className="hidden sm:flex">
              <SmartLink className="link" href="/regions/">
                All Regions
              </SmartLink>
            </div>

            <span className="hidden sm:block relative -top-2 text-4xl text-navy-700">
              &#10095;
            </span>

            <div className="flex">
              <SmartLink className="link" href={subregion.region.path}>
                {subregion.region.name}
              </SmartLink>
            </div>

            <span className="hidden sm:block relative -top-2 text-4xl text-navy-700">
              &#10095;
            </span>

            <div className="hidden sm:flex">
              <SmartLink className="link" href={subregion.path}>
                {subregion.name}
              </SmartLink>
            </div>
          </nav>
        </div>
      </header>

      <div className="py-8">
        <ul className="flex gap-4 justify-center text-2xl border-b-2">
          <li>
            <SmartLink href={subregion.path}>
              <Button variant="primary">Overview</Button>
            </SmartLink>
          </li>
          <li>
            <SmartLink href={needsExplorerUrl.toString()}>
              <Button>Needs</Button>
            </SmartLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          {sections.map((section, i) => {
            return (
              <div
                key={i}
                className="last:grow"
                style={{
                  backgroundColor: getBackgroundColor(),
                }}
              >
                <Section key={i} section={section} className="prose mx-auto" />
              </div>
            )
          })}
        </div>

        <div className="flex flex-col">
          {/* SMALL HACK: shouldn't use test-helpers as a way to get defaults */}
          {subregion.stayInformed.links.length > 0 && (
            <div
              className="last:grow"
              style={{ backgroundColor: getBackgroundColor() }}
            >
              <SectionGrid
                section={getSectionGridNode()}
                className="prose mx-auto"
              >
                <BlockLinksList block={subregion.stayInformed} />
              </SectionGrid>
            </div>
          )}

          {/* SMALL HACK: shouldn't use test-helpers as a way to get defaults */}
          {subregion.newsUpdates.updates.length > 0 && (
            <div
              className="last:grow"
              style={{ backgroundColor: getBackgroundColor() }}
            >
              <SectionGrid
                section={getSectionGridNode()}
                className="prose mx-auto"
              >
                <BlockUpdatesList block={subregion.newsUpdates} />
              </SectionGrid>
            </div>
          )}
        </div>
      </div>
    </SimpleLayout>
  )
}
export default page