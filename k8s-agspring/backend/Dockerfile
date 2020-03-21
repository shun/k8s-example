FROM openjdk:slim-buster as base
ENV SPRINGBOOT_VER=2.2.5
ENV MAVEN_VER=3.6.3
ENV GRADLE_VER=6.2.2

FROM base as downloader

RUN apt update \
    && apt install -y curl zip \
    && rm -rf /var/lib/apt/lists/* \
    && curl -L https://services.gradle.org/distributions/gradle-${GRADLE_VER}-bin.zip -o /opt/gradle.zip \
    && curl -L https://ftp.riken.jp/net/apache/maven/maven-3/${MAVEN_VER}/binaries/apache-maven-${MAVEN_VER}-bin.zip -o /opt/maven.zip \
    && curl -L https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/${SPRINGBOOT_VER}.RELEASE/spring-boot-cli-${SPRINGBOOT_VER}.RELEASE-bin.zip -o /opt/spring-boot-cli.zip \
    && unzip /opt/gradle.zip -d /opt \
    && unzip /opt/maven.zip -d /opt \
    && unzip /opt/spring-boot-cli.zip -d /opt \
    && rm -rf /opt/*.zip


FROM base

ARG WORKUSR=backend
ARG EXTRA_PATH='PATH=$PATH':/opt/apache-maven-${MAVEN_VER}/bin:/opt/gradle-${GRADLE_VER}/bin:/opt/spring-${SPRINGBOOT_VER}.RELEASE/bin

COPY --from=downloader /opt/ /opt/

RUN apt update \
    && apt install -y \
        sudo \
        whois \
    && rm -rf /var/lib/apt/lists/* \
    && useradd -m -p `echo "$WORKUSR" | mkpasswd -s -m sha-512` -s /bin/bash $WORKUSR \
    && mkdir /project \
    && chown -R $WORKUSR:$WORKUSR /project \
    && echo $EXTRA_PATH >> /home/$WORKUSR/.bashrc

USER $WORKUSR
WORKDIR /project

