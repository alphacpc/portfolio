import React from 'react'

import "./../assets/css/Tools.css"

import spark from "./../assets/images/logo/spark.png";

import data from "./../data.json"

const Tools = () => {

  console.log("Valeur de data : ",data)

  return (
    <div className="divToolsContainer">
        <h2 className="mg-bt-20 small">Tools</h2>
        <div className="dis-flex space">
            {/* <img src={spark} alt="" /> */}
            <span>Spark</span>
            <span>Airflow</span>
            <span>Pandas</span>
            <span>Kafka</span>
            <span>Elasticsearch</span>
            <span>Logstash</span>
            <span>Kibana</span>
            <span>D3.js</span>
            <span>Chart.js</span>
            <span>MongoDB</span>
            <span>Neo4j</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>ReactJS</span>
            <span>Angular</span>
            <span>Flask</span>
            <span>Django</span>
            <span>Wordpress</span>
            <span>React Native</span>
            <span>NodeJS</span>
            <span>Figma</span>
            <span>API Rest</span>
            <span>GraphQL</span>
            <span>BeautifulSoup</span>
            <span>Pupperteer</span>
            <span>Selenium</span>
            <span>Docker</span>
        </div>
    </div>
  )
}

export default Tools