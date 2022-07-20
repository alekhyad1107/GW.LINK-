import { Collapse } from "antd";

const { Panel } = Collapse;

const FAQs = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20" }}>
        Welcome to the FAQ SECTION!!
      </h1>
      <p>
        Here you can see questions that students have about life at George
        Washington University.
      </p>
      <Collapse accordion>
        <Panel header="Where can I get my GWorld ID?" key="1">
          <p>
            You can get your GWorld ID from the GWorld card office located at,
            800 21st St NW g05, Washington, DC 20052
          </p>
        </Panel>
        <Panel
          header="Where can I the campus policies related to COVID-19?"
          key="2"
        >
          <p>
            Take a look at the GW Covid-19 Dashboard to learn more about campus
            policies relating to COVID-19.
          </p>
        </Panel>
        <Panel header="Where do I go to pay my eBill?" key="3">
          <p>
            You can pay your eBill through banweb by using your student login.
          </p>
        </Panel>
        <Panel
          header="Who is the best professor in the ISTM department?"
          key="4"
        >
          <p>
            DR.Shubha is the BEST professor in the department and on campus!
          </p>
        </Panel>
        <Panel header="Where is food on campus?" key="5">
          <p>
            There are several places to find food on campus but the largest
            location is in the basement of District House dorm.
          </p>
        </Panel>
        <Panel header="How long is the Gelman Starbucks open everyday?" key="6">
          <p>For the hours of Starbucks please check their website.</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQs;
