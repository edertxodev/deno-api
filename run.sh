if [[ $1 == "build" ]]; then
  docker-compose up --build
elif [[ $1 == 'run' ]]; then
  docker-compose up
else
  echo "Not valid param. [build, run]"
fi