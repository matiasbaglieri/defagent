build_app:
	ng build --prod --baseHref /landings/ #--deploy-url https://angular.nyc3.cdn.digitaloceanspaces.com/landings/whitelabel/everythink/
deploy:
	rm -rf ../directory/dist/landings
	cp -R dist/ ../directory/dist/landings

docker_build:
	docker build -t landings .

docker_run:docker_build
	docker run -it --rm -d -p 4000:80 --name web-landings  landings

dock_image:
	docker-compose build landings
dock_create:
	docker-compose create landings
dock_start:
	docker-compose start -d landings
dock_ls_images:
	docker images
dock_ps:
	docker ps
dock_ps_a:
	docker ps -a
dock_rm_container:
	docker rm -f web-landings
dock_rm_image:
	docker rmi landings
dock_rm_all:
	docker-compose down --rmi all
docker_console:
	docker exec -it web-landings /bin/bash
