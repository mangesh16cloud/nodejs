pipeline {
  agent any
  tools {
        nodejs "nodejs"
    }
    stages {
        stage('SCM checkout phase') {
	     agent { 
    		label 'jenkins-agent'
		}
            steps {
		checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/arsh-ash/Portfolio-website.git']]])
		
		stash 'source'
            }
        }
	
        stage('sonar-analysis phase') {
            steps {
                unstash 'source'
                echo 'unstash successful'
                sh '/opt/sonar-scanner/bin/sonar-scanner --version'
                withSonarQubeEnv('sonar') {
                sh  """/opt/sonar-scanner/bin/sonar-scanner \
                -Dsonar.projectKey=nodejs \
                -Dsonar.sources=. \
                -Dsonar.host.url=http://10.1.76.15:9000 \
                -Dsonar.login=8bea0ed7cd81cfb952e1971850430bf0804e7689"""
                stash 'source'
            }
        }
        }
        stage ('npm build phase UNDER CONSTRUCTION') {
            steps{
                unstash 'source'
                echo 'unstash is successfull'
                sh 'npm -v'
                echo 'node build successfull'
            }
        }
        stage ('manual test phase  UNDER CONSTRUCTION') {
            steps{
                unstash 'source'
                echo 'unstash is successfull'
                sh 'npm -v'
                echo 'node build perform here'
            }
        }
        stage ('docker-image phase for version control UNDER CONSTRUCTION') {
            steps{
                
                echo 'docker images build here'
                
                
            }
        }
    }
    
}
