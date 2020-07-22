FROM hayd/alpine-deno:latest
EXPOSE 1992
WORKDIR /usr/app
COPY . .
RUN apk --no-cache add curl
RUN curl -s https://raw.githubusercontent.com/muhibbudins/denomon/master/install.sh | sh
RUN deno cache app.ts
ENTRYPOINT [ "/usr/local/bin/denomon" ]
CMD [ "--allow", "net,read,env", "app.ts"]