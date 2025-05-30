import React from 'react';

const PhpTech = () => {
  const techCategories = 
    [
            {
              "name": "Core PHP Frameworks:",
              "items": [
                { "name": "Laravel", "logo": "https://laravel.com/img/logomark.min.svg" },
                { "name": "Symfony", "logo": "https://symfony.com/logos/symfony_black_03.svg" },
                { "name": "CodeIgniter", "logo": "https://codeigniter.com/assets/icons/codeigniter.svg" },
                { "name": "CakePHP", "logo": "https://cakephp.org/img/cake-logo.svg" }
              ]
            },
            {
              "name": "Build and Dependency Management:",
              "items": [
                { "name": "Composer", "logo": "https://getcomposer.org/img/logo-composer-transparent5.png" },
                { "name": "Phing", "logo": "https://phing.info/images/phing-logo.png" }
              ]
            },
            {
              "name": "Database and ORM Tools:",
              "items": [
                { "name": "Eloquent ORM", "logo": "https://laravel.com/img/logomark.min.svg" },
                { "name": "Doctrine ORM", "logo": "https://www.doctrine-project.org/projects/orm.html" },
                { "name": "MySQL", "logo": "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
                { "name": "PostgreSQL", "logo": "https://www.postgresql.org/media/img/about/press/elephant.png" },
                { "name": "MongoDB", "logo": "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png" }
              ]
            },
            {
              "name": "Testing and Debugging:",
              "items": [
                { "name": "PHPUnit", "logo": "https://phpunit.de/assets/img/phpunit-logo.svg" },
                { "name": "PestPHP", "logo": "https://pestphp.com/img/logo.svg" },
                { "name": "Xdebug", "logo": "https://xdebug.org/images/logo.png" }
              ]
            },
            {
              "name": "API and Web Development:",
              "items": [
                { "name": "Laravel API Resources", "logo": "https://laravel.com/img/logomark.min.svg" },
                { "name": "Symfony HTTPFoundation", "logo": "https://symfony.com/logos/symfony_black_03.svg" },
                { "name": "Swagger (OpenAPI)", "logo": "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" }
              ]
            },
            {
              "name": "Cloud and DevOps:",
              "items": [
                { "name": "Docker", "logo": "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
                { "name": "Kubernetes", "logo": "https://kubernetes.io/images/kubernetes-horizontal-color.png" },
                { "name": "AWS", "logo": "https://d1.awsstatic.com/logos/aws-logo-lockups/poweredbyaws/PB_AWS_logo_RGB_stacked_REV_SQ.91cd4af40773cbfbd15577a3c2b8a346fe3e8fa2.png" },
                { "name": "Laravel Forge", "logo": "https://forge.laravel.com/images/logo-light.svg" }
              ]
            },
            {
              "name": "Monitoring and Performance:",
              "items": [
                { "name": "Laravel Telescope", "logo": "https://laravel.com/img/logomark.min.svg" },
                { "name": "New Relic", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b4/NewRelic-logo.svg" },
                { "name": "Blackfire", "logo": "https://avatars.githubusercontent.com/u/11921938?s=280&v=4" }
              ]
            }
          
          
      ];
      
  

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">OUR PHP TECH</h2>
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

export default PhpTech;
