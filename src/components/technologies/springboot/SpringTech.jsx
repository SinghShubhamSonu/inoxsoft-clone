import React from 'react';

const SpringBootTech = () => {
  const techCategories = 
    [
        {
            "name": "Core Spring Frameworks:",
            "items": [
              { "name": "Spring Boot", "logo": "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg" },
              { "name": "Spring Framework", "logo": "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg" },
              { "name": "Spring Data JPA", "logo": "https://spring.io/images/projects/spring-data-jpa-8b0fb024b9b0c3e2a0e877c250adee26.svg" },
              { "name": "Spring Security", "logo": "https://spring.io/images/projects/spring-security-b712a4cdb8e40b11a608c09c6d7bcee7.svg" }
            ]
          },
          {
            "name": "Build and Dependency Management:",
            "items": [
              { "name": "Maven", "logo": "https://maven.apache.org/images/maven-logo-black-on-white.png" },
              { "name": "Gradle", "logo": "https://gradle.org/images/gradle-knowledge-graph-logo.png" }
            ]
          },
          {
            "name": "Database and ORM Tools:",
            "items": [
              { "name": "Hibernate", "logo": "https://hibernate.org/images/hibernate-logo.svg" },
              { "name": "MySQL", "logo": "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
              { "name": "PostgreSQL", "logo": "https://www.postgresql.org/media/img/about/press/elephant.png" },
              { "name": "MongoDB", "logo": "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" }
            ]
          },
          {
            "name": "Testing and Debugging:",
            "items": [
              { "name": "JUnit", "logo": "https://junit.org/junit5/assets/img/junit5-logo.png" },
              { "name": "Mockito", "logo": "https://site.mockito.org/images/mockito-logo.png" },
              { "name": "Testcontainers", "logo": "https://www.testcontainers.org/img/testcontainers-logo.svg" }
            ]
          },
          {
            "name": "API and Web Development:",
            "items": [
              { "name": "Spring MVC", "logo": "https://spring.io/images/projects/spring-framework-640ad1b04f7efa89e0f0f7353e6b5e02.svg" },
              { "name": "Spring REST", "logo": "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg" },
              { "name": "Swagger (OpenAPI)", "logo": "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" }
            ]
          },
          {
            "name": "Cloud and DevOps:",
            "items": [
              { "name": "Spring Cloud", "logo": "https://spring.io/images/projects/spring-cloud-81fe04a1296a574d7cfb545c7ffafb0e.svg" },
              { "name": "Docker", "logo": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
              { "name": "Kubernetes", "logo": "https://kubernetes.io/images/kubernetes-horizontal-color.png" },
              { "name": "AWS", "logo": "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png" }
            ]
          },
          {
            "name": "Monitoring and Performance:",
            "items": [
              { "name": "Actuator", "logo": "https://spring.io/images/projects/spring-boot-7f2e24fb962501672cc91ccd285ed2ba.svg" },
              { "name": "Prometheus", "logo": "https://prometheus.io/assets/prometheus_logo_grey.svg" },
              { "name": "Grafana", "logo": "https://grafana.com/static/img/menu/grafana2.svg" }
            ]
          }
      ];
      
  

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">OUR SPRING BOOT TECH</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {techCategories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-col md:flex-row border-b border-gray-200 pb-6 mb-6">
                <div className="w-full md:w-1/4 font-medium text-lg mb-4 md:mb-0">
                  {category.name}
                </div>
                <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex flex-col items-center">
                      <div className="bg-white rounded-lg p-2 w-32 h-32 flex items-center justify-center shadow-sm mb-2">
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className="max-w-16 max-h-16 object-contain"
                        />
                      </div>
                      <p className="text-center text-sm">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpringBootTech;
