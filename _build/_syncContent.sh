#! /bin/bash

#The script can have 0, 1 input parameters
#parameter $1 can be one of 3 values ('dft','pst','smp')
	# dft - Drafts
	# pst - Posts
	# smp - Sample posts
# All but Sample syncs the Content directory as well


set -o errexit
set -o nounset

DATE=`date "+%Y%m%d-%H%M%S"`
SRC=$HOME/Documents/_blog
DST=$HOME/Sites/jdmBlog

# Build a list of common rsync parameters
params=(
	--exclude='.DS_Store'
	--exclude='.localized'
	--exclude=Caches/
	--exclude=Cache/
	--delete-excluded
	--progress
)

function drafts {
	if [ -d "$SRC/_drafts" -a -d "$DST/_drafts" ]; then
		echo "==== Syncing Drafts ===="
		rsync -avhXr ${params[@]} $SRC/_drafts/ $DST/_drafts/
	else
		echo "==== Paths '$SRC/_drafts/ > $DST/_drafts/' not found ===="
		exit 1
	fi
}
function posts {
	if [ -d "$SRC/_posts" -a -d "$DST/_posts" ]; then
		echo "==== Syncing Posts ===="
		rsync -avhXr ${params[@]} $SRC/_posts/ $DST/_posts/
	else
		echo "==== Paths '$SRC/_posts/ > $DST/_posts/' not found ===="
		exit 1
	fi
}
function sample {
	if [ -d "$SRC/_sample" -a -d "$DST/_drafts" ]; then
		echo "==== Syncing Sample ===="
		rsync -avhXr ${params[@]} $SRC/_sample/ $DST/_drafts/
	else
		echo "==== Paths '$SRC/_sample/ > $DST/_drafts/' not found ===="
		exit 1
	fi
}
function content {
	if [ -d "$SRC/content" -a -d "$DST/content" ]; then
		echo "==== Syncing Content ===="
		rsync -avhXr ${params[@]} $SRC/content/ $DST/content/
	else
		echo "==== Paths '$SRC/content/ > $DST/content/' not found ===="
		exit 1
	fi
}

# Run script
if [[ $# == 0 ]]; then
	drafts;
	posts;
	content;
	exit 0
elif [[ $# == 1 ]]; then
	case "$1" in
		'dft')
			drafts;
			content;
			rm -f $DST/_posts/*;
			exit 0
			;;
		'pst')
			posts;
			content;
			rm -f $DST/_drafts/*;
			exit 0
			;;
		'spl')
			sample;
			rm -f $DST/_posts/*;
			exit 0
			;;
		*)
			echo 'Not a valid arguement';
			exit 1
	esac
else
	echo 'Not a valid arguement';
	exit 1
fi

exit 0