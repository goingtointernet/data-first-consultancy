// data/caseStudiesData.js
const caseStudiesData = [
  {
    id: 'multi-cloud-data-platform',
    bannerTitle:"Building a Multi-Geo",
    bannerSubheading:"Building a Multi-Geo, Multi-Cloud Data Platform",
    title: 'Building a Multi-Geo, Multi-Cloud Data Platform for a FTSE 250 Organisation',
    image: '/images/c1.png',
    goal: 'Faced with increasing regulatory pressure, fragmented legacy systems, and the need for near real-time insights, a FTSE 250 financial services company embarked on a major data modernisation initiative. The goal was to design and build a cloud-native, multi-geo data platform capable of ingesting and transforming vast amounts of operational and customer data — securely, scalably, and cost-effectively.',
    details: [
      {
        images: ['/images/c2.jpg', '/images/c3.jpg'],
        text: [
          `Open source technologies were leveraged heavily to reduce vendor lock-in, enable modularity, and accelerate delivery. Airbyte was used to handle a wide range of source system extractions, enabling hundreds of data pipelines to be configured declaratively with minimal overhead. Change data capture was handled using Debezium, allowing for near real-time replication of transactional databases into the platform without intrusive batch loads. Apache Airflow acted as the orchestration layer, providing a clear and auditable pipeline execution framework across a distributed team. dbt was adopted as the semantic and transformation engine, enabling analysts and engineers alike to define business logic in a controlled and testable manner.`,
          `Data governance, observability, and access control were baked in from the start. The platform integrated seamlessly with enterprise identity providers, supported lineage tracking, and maintained strict role-based access across all cloud environments. Despite the complexity of supporting multiple cloud vendors and regions, the use of infrastructure-as-code and containerisation allowed for consistent deployments, automated testing, and minimal operational drift.`,
        ],
      },
      {
        images: ['/images/c1.png'],
        text: [
          `Within twelve months, the platform was fully operational and supporting critical workloads across finance, risk, customer analytics, and regulatory reporting. Notably, it enabled the business to retire several legacy reporting systems, accelerate time to insight from days to minutes, and support a range of new AI/ML use cases. The design also allowed the firm to respond to new regulatory requirements in different jurisdictions without significant rework, demonstrating the flexibility and resilience of the architecture.`,
          `This platform has since become a strategic asset for the organisation — not just a technical upgrade, but a foundation for digital and analytical innovation across the group.`,
        ],
      },
    ],
  },
  {
    id: 'multi-cloud-data-platform-2',
    title: 'Multi-Cloud Data Platform',
    image: '/images/c2.jpg',
    goal: 'Faced with increasing regulatory pressure, fragmented legacy systems, and the need for near real-time insights...',
    details: [
      {
        images: ['/images/c3.jpg', '/images/c1.png'],
        text: [
          `At the core of the architecture was Snowflake, chosen for its decoupled storage and compute, native support for multi-cloud deployments...`,
          `Open source technologies were leveraged heavily to reduce vendor lock-in, enable modularity, and accelerate delivery...`,
        ],
      },
      {
        images: ['/images/c2.jpg'],
        text: [
          `Within twelve months, the platform was fully operational and supporting critical workloads across finance, risk, customer analytics, and regulatory reporting...`,
          `This platform has since become a strategic asset for the organisation...`,
        ],
      },
    ],
  },
  {
    id: 'multi-cloud-data-platform-3',
    title: 'Multi-Cloud Data Platform',
    image: '/images/c3.jpg',
    goal: 'Faced with increasing regulatory pressure, fragmented legacy systems, and the need for near real-time insights...',
    details: [
      {
        images: ['/images/c1.png', '/images/c2.jpg'],
        text: [
          `At the core of the architecture was Snowflake, chosen for its decoupled storage and compute, native support for multi-cloud deployments...`,
          `Open source technologies were leveraged heavily to reduce vendor lock-in, enable modularity, and accelerate delivery...`,
        ],
      },
      {
        images: ['/images/c3.jpg'],
        text: [
          `Within twelve months, the platform was fully operational and supporting critical workloads across finance, risk, customer analytics, and regulatory reporting...`,
          `This platform has since become a strategic asset for the organisation...`,
        ],
      },
    ],
  },
  // Add more case studies here
];


export default caseStudiesData;
