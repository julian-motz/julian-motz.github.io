import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import 'react-vertical-timeline-component/style.min.css';

import { MdWork, MdSchool } from 'react-icons/md'


export const Experience = () => {
    return (
        <>
            <div name="section-services" className="h-screen p-20 bg-slate-100 text-black">
                <div className="my-10">
                    <p className="ml-4 text-left lg:text-6xl font-bold md:text-5xl sm:text-4xl">Work Experience & Education</p>
                </div>
                <VerticalTimeline className="drop-shadow-md">
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work drop-shadow-md hover:drop-shadow-xl"
                        contentStyle={{ borderTop: '6px solid', background: 'rgb(241 245 249)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(241 245 249)' }}
                        date="2020 - present"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cologne, DE</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work vertical-timeline-element-left drop-shadow-md hover:drop-shadow-xl"
                        contentStyle={{ borderTop: '6px solid', background: 'rgb(241 245 249)', color: '#000' }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(241 245 249)' }}
                        date="2020 - present"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <div>
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-900 text-white rounded">New</span>
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-900 text-white rounded">New</span>
                        </div>
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cologne, DE</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work drop-shadow-md hover:drop-shadow-xl"
                        contentStyle={{ borderTop: '6px solid', background: 'rgb(241 245 249)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(241 245 249)' }}
                        date="2020 - present"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<MdWork />}
                    >
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cologne, DE</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work drop-shadow-md hover:drop-shadow-xl"
                        contentStyle={{ borderTop: '6px solid', background: 'rgb(241 245 249)', color: '#000' }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(241 245 249)' }}
                        date="2020 - present"
                        iconStyle={{ background: 'rgb(15 23 42)', color: '#fff' }}
                        icon={<MdSchool />}
                    >
                        <div>
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-900 text-white rounded">New</span>
                        <span class="inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-slate-900 text-white rounded">New</span>
                        </div>
                        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cologne, DE</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
        </div>
        </>
    );
};