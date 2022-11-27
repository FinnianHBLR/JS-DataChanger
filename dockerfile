FROM ubuntu
LABEL maintainer="Finn LR"

RUN apt-get update

CMD [ "echo", "lo" ]