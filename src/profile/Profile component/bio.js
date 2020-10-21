import React from "react";

export default function bio() {
  const styleObject = { color: "cyan", textAlign: "center" };

  return (
    <div style={styleObject} className="banner-text" id="bio">
      <h1 style={{ marginTop: "40px" }}> Bio </h1>
      <p style={{ fontWeight: "bold", fontSize: "60px" }}>Alouani ElHabib</p>
      <p>BI and BigData developper</p>
      <p>
        Outils:
        <br />
        MSBI(SSIS, SSAS,SSRS), Power BI, Talend ETL, IBM SPSS Modeler,
        QlilSense, Tableau Software.
        <br />
        Frameworks:
        <br />
        Hadoop(HDFS, Pig, Hive, HBase), Spark, JEE , Symfony2/4.
        <br />
        Base de données:
        <br />
        MongoDB, Cassandra, MySQL, SQL server, PostgreSQL.
        <br />
        Langages:
        <br />
        Java8, C, C++, C#,Python, R Studio, Maple ,HTML 5 ,CSS ,JavaScript ,PHP.
        <br />
        Méthodologies:
        <br />
        Agile SCRUM, 2UP, Cycle en V, Merise, GIMSI, Ralph Kimball.
      </p>
    </div>
  );
}
